import { ArrowPath } from '@/components/icons/ArrowPath';
import { ArrowsCrossing } from '@/components/icons/ArrowsCrossing';
import { clsx } from '@/utils';
import React from 'react';
import useSound from 'use-sound';
import catMeow from './cat-meow.mp3';

type TCatFur = 'white';

type TCatHat = 'banana' | 'lil-duck' | 'propeller-hat' | 'heart' | 'timer' | 'crown';

type TCatFace = 'asia' | 'cute' | 'dead' | 'harry-potter' | 'nerd' | 'pilot' | 'pixel-cool';

type TCatHand = 'down' | 'up';

const catConfig = {
	// Base size of the cat asset (width and height, since it's square)
	baseSize: 248,
	// Base bottom offset of the body from the bottom of the image (in pixels at base size)
	baseBodyBottomOffset: 83,
	// Minimum time between taps (prevents rapid tapping e.g. when dragging timer wheel)
	tapThrottleMs: 200,
	parts: {
		fur: {
			available: ['white'] as const,
			path: {
				base: (fur: TCatFur) => getCatPath('fur', `${fur}_base`),
				leftHand: (fur: TCatFur, hand: TCatHand) => getCatPath('fur', `${fur}_left-${hand}`),
				rightHand: (fur: TCatFur, hand: TCatHand) => getCatPath('fur', `${fur}_right-${hand}`),
			},
		},
		hat: {
			available: ['banana', 'lil-duck', 'propeller-hat', 'heart', 'timer', 'crown'] as const,
			path: (hat: TCatHat) => getCatPath('hat', hat),
		},
		face: {
			available: ['asia', 'cute', 'dead', 'harry-potter', 'nerd', 'pilot', 'pixel-cool'] as const,
			path: (face: TCatFace) => getCatPath('face', face),
		},
		hand: {
			available: ['down', 'up'] as const,
		},
	},
};

function getCatPath(category: string, name: string): string {
	return `/images/cat/${category}/${category}_${name}.svg`;
}

// MARK: - localStorage persistence

const STORAGE_KEY = 'cat-settings';

interface TCatSettings {
	face: TCatFace;
	hat: TCatHat | null;
}

function loadCatSettings(): TCatSettings {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (raw) {
			const parsed = JSON.parse(raw) as Partial<TCatSettings>;
			const face =
				parsed.face && (catConfig.parts.face.available as readonly string[]).includes(parsed.face)
					? parsed.face
					: 'cute';
			const hat =
				parsed.hat !== undefined &&
				(parsed.hat === null ||
					(catConfig.parts.hat.available as readonly string[]).includes(parsed.hat))
					? parsed.hat
					: null;
			return { face, hat };
		}
	} catch {
		// ignore
	}
	return { face: 'cute', hat: null };
}

function saveCatSettings(settings: TCatSettings): void {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
	} catch {
		// ignore
	}
}

// MARK: - Component

export function Cat() {
	const fur: TCatFur = 'white';
	const size = 150;
	const position: 'edge' | 'centered' = 'edge';
	const [leftHandPose, setLeftHandPose] = React.useState<TCatHand>('up');
	const [rightHandPose, setRightHandPose] = React.useState<TCatHand>('up');
	const lastTappedHandRef = React.useRef<'left' | 'right'>('right');
	const cooldownUntilRef = React.useRef(0);
	const [playMeow] = useSound(catMeow);

	const [catSettings, setCatSettings] = React.useState<TCatSettings>(() => loadCatSettings());
	const { face, hat } = catSettings;

	const bottomOffset =
		position === 'edge' ? catConfig.baseBodyBottomOffset * (size / catConfig.baseSize) : 0;
	const containerHeight = size - bottomOffset;

	// MARK: - Actions

	const tap = React.useCallback((options: TTapOptions = {}) => {
		const {
			mode = lastTappedHandRef.current === 'right' ? 'left' : 'right',
			cooldown = catConfig.tapThrottleMs,
		} = options;

		if (cooldown !== 0 && Date.now() < cooldownUntilRef.current) {
			return;
		}

		if (mode === 'left' || mode === 'both') {
			setLeftHandPose('down');
			setTimeout(() => setLeftHandPose('up'), 100);
		}
		if (mode === 'right' || mode === 'both') {
			setRightHandPose('down');
			setTimeout(() => setRightHandPose('up'), 100);
		}
		if (mode !== 'both') {
			lastTappedHandRef.current = mode;
		}

		cooldownUntilRef.current = Date.now() + cooldown;
	}, []);

	const handleTap = React.useCallback(() => {
		playMeow();
		tap({ cooldown: 0 });
	}, [tap, playMeow]);

	const handleShuffle = React.useCallback(() => {
		const faces = catConfig.parts.face.available;
		const hats: (TCatHat | null)[] = [...catConfig.parts.hat.available, null];

		let nextFace: TCatFace = face;
		let nextHat: TCatHat | null = hat;
		while (nextFace === face && nextHat === hat) {
			nextFace = faces[Math.floor(Math.random() * faces.length)] as TCatFace;
			nextHat = hats[Math.floor(Math.random() * hats.length)] ?? null;
		}

		const next: TCatSettings = { face: nextFace, hat: nextHat };
		setCatSettings(next);
		saveCatSettings(next);
	}, [face, hat]);

	const isDefault = face === 'cute' && hat === null;

	const handleReset = React.useCallback(() => {
		const defaults: TCatSettings = { face: 'cute', hat: null };
		setCatSettings(defaults);
		saveCatSettings(defaults);
	}, []);

	// MARK: - UI

	return (
		<div
			className="pointer-events-none relative mx-auto cursor-grab"
			style={{ width: size, height: containerHeight }}
		>
			{/* Reset button */}
			{!isDefault && (
				<button
					className="pointer-events-auto absolute top-1 left-1 z-40 text-neutral-700 hover:text-neutral-600 p-1"
					onClick={handleReset}
					type="button"
				>
					<ArrowPath />
				</button>
			)}
			{/* Shuffle button */}
			<button
				className="pointer-events-auto absolute top-1 right-1 z-40 text-neutral-700 hover:text-neutral-600 p-1"
				onClick={handleShuffle}
				type="button"
			>
				<ArrowsCrossing />
			</button>
			{/* Tap target */}
			<div className="pointer-events-auto absolute inset-0 select-none" onPointerDown={handleTap} />
			{/* Cat layers */}
			<div
				className="pointer-events-none absolute bottom-0 left-0"
				style={{
					width: size,
					height: size,
					transform: `translateY(${bottomOffset}px)`,
				}}
			>
				<img
					src={catConfig.parts.fur.path.base(fur)}
					alt=""
					draggable={false}
					className="absolute inset-0 h-full w-full select-none footer-bongo-cat"
				/>
				{/* Note: Keep both paw poses mounted to avoid image requests during taps */}
				{catConfig.parts.hand.available.map((pose) => (
					<img
						key={pose}
						src={catConfig.parts.fur.path.leftHand(fur, pose)}
						alt=""
						draggable={false}
						className={clsx(
							'absolute inset-0 h-full w-full select-none footer-bongo-cat',
							pose !== leftHandPose && 'invisible',
						)}
					/>
				))}
				<img
					src={catConfig.parts.face.path(face)}
					alt=""
					draggable={false}
					className="absolute inset-0 h-full w-full select-none footer-bongo-cat"
				/>
				{hat != null && (
					<img
						src={catConfig.parts.hat.path(hat)}
						alt=""
						draggable={false}
						className="absolute inset-0 h-full w-full select-none footer-bongo-cat"
					/>
				)}
				{/* Note: Keep both paw poses mounted to avoid image requests during taps */}
				{catConfig.parts.hand.available.map((pose) => (
					<img
						key={pose}
						src={catConfig.parts.fur.path.rightHand(fur, pose)}
						alt=""
						draggable={false}
						className={clsx(
							'absolute inset-0 h-full w-full select-none footer-bongo-cat',
							pose !== rightHandPose && 'invisible',
						)}
					/>
				))}
			</div>
		</div>
	);
}

type TCatTapMode = 'left' | 'right' | 'both';

interface TTapOptions {
	mode?: TCatTapMode;
	cooldown?: number;
}
