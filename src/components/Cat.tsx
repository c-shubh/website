// From https://github.com/builder-group/focuscat/tree/476cf11fa98989a01da9955b22839aabefde5741/packages/ui/src/features/cat

import { clsx } from '@/utils';
import React from 'react';

type TCatFur = 'white';

type TCatHat = 'banana' | 'lil-duck' | 'propeller-hat' | 'heart' | 'timer' | 'crown';

type TCatFace = 'asia' | 'cute' | 'dead' | 'harry-potter' | 'nerd' | 'pilot' | 'pixel-cool';

type TCatHand = 'down' | 'up';

interface TCat {
	fur: TCatFur;
	hat?: TCatHat;
	face: TCatFace;
	leftHand: TCatHand;
	rightHand: TCatHand;
}

function randomCat(): TRandomCat {
	const faces = catConfig.parts.face.available;
	const face = faces[Math.floor(Math.random() * faces.length)] as TCatFace;

	const hats = catConfig.parts.hat.available;
	const hat: TCatHat | undefined =
		Math.random() < 0.5 ? (hats[Math.floor(Math.random() * hats.length)] as TCatHat) : undefined;

	return { face, hat };
}

interface TRandomCat {
	face: TCatFace;
	hat: TCatHat | undefined;
}

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

export const Cat = React.forwardRef<TCatRef, TCatProps>((props, ref) => {
	const {
		fur = 'white',
		face = 'cute',
		hat,
		size = 150,
		position = 'edge',
		className,
		onTap,
	} = props;
	const [leftHandPose, setLeftHandPose] = React.useState<TCatHand>('up');
	const [rightHandPose, setRightHandPose] = React.useState<TCatHand>('up');
	const lastTappedHandRef = React.useRef<'left' | 'right'>('right');
	const cooldownUntilRef = React.useRef(0);

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
		tap({ ...(onTap?.() ?? {}), cooldown: 0 });
	}, [tap, onTap]);

	// MARK: - Effects

	React.useImperativeHandle(ref, () => ({ tap }), [tap]);

	// MARK: - UI

	return (
		<div
			className={clsx('pointer-events-none relative', className)}
			style={{ width: size, height: containerHeight }}
		>
			{/* Tap target */}
			<div className="pointer-events-auto absolute inset-0" onPointerDown={handleTap} />
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
					className="absolute inset-0 h-full w-full select-none"
				/>
				{/* Note: Keep both paw poses mounted to avoid image requests during taps */}
				{catConfig.parts.hand.available.map((pose) => (
					<img
						key={pose}
						src={catConfig.parts.fur.path.leftHand(fur, pose)}
						alt=""
						draggable={false}
						className={clsx(
							'absolute inset-0 h-full w-full select-none',
							pose !== leftHandPose && 'invisible',
						)}
					/>
				))}
				<img
					src={catConfig.parts.face.path(face)}
					alt=""
					draggable={false}
					className="absolute inset-0 h-full w-full select-none"
				/>
				{hat != null && (
					<img
						src={catConfig.parts.hat.path(hat)}
						alt=""
						draggable={false}
						className="absolute inset-0 h-full w-full select-none"
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
							'absolute inset-0 h-full w-full select-none',
							pose !== rightHandPose && 'invisible',
						)}
					/>
				))}
			</div>
		</div>
	);
});
Cat.displayName = 'Cat';

interface TCatProps {
	fur?: TCatFur;
	face?: TCatFace;
	hat?: TCatHat | null;
	size?: number;
	position?: 'edge' | 'centered';
	className?: string;
	onTap?: (() => TTapOptions) | (() => void);
}

interface TCatRef {
	tap: (options?: TTapOptions) => void;
}

type TCatTapMode = 'left' | 'right' | 'both';

interface TTapOptions {
	mode?: TCatTapMode;
	cooldown?: number;
}
