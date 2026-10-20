import React from 'react';

interface Day {
	date: number;
	yyyyMmDd: string;
}

interface Week {
	weekNo: number;
	days: (Day | null)[];
}

interface CalendarMonth {
	name: string;
	weeks: Week[];
}

type CalendarYear = CalendarMonth[];

function getCalendarYear(year: number): CalendarYear {
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	function getISOWeek(date: Date): number {
		const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
		const dayNum = d.getUTCDay() || 7;
		d.setUTCDate(d.getUTCDate() + 4 - dayNum);
		const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
		return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
	}

	const calendar: CalendarYear = [];

	for (let m = 0; m < 12; m++) {
		const monthStart = new Date(year, m, 1);
		const monthEnd = new Date(year, m + 1, 0);
		const weeks: Week[] = [];

		let firstDayOfWeek = monthStart.getDay(); // 0 (Sun) to 6 (Sat)
		if (firstDayOfWeek === 0) firstDayOfWeek = 7; // Treat Sunday as 7 for Monday-start indexing

		const currentTracker = new Date(year, m, 1 - (firstDayOfWeek - 1));

		while (currentTracker <= monthEnd) {
			const weekDays: Week['days'] = [];

			// Thursday of the current week determines its ISO week number
			const thursday = new Date(currentTracker);
			thursday.setDate(currentTracker.getDate() + 3);
			const weekNo = getISOWeek(thursday);

			for (let i = 0; i < 7; i++) {
				const d = new Date(currentTracker);
				d.setDate(currentTracker.getDate() + i);

				if (d.getMonth() === m && d.getFullYear() === year) {
					weekDays.push({
						date: d.getDate(),
						yyyyMmDd: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
							2,
							'0',
						)}-${String(d.getDate()).padStart(2, '0')}`,
					});
				} else {
					weekDays.push(null);
				}
			}

			weeks.push({ weekNo, days: weekDays });
			currentTracker.setDate(currentTracker.getDate() + 7);
		}

		calendar.push({ name: monthNames[m], weeks });
	}

	return calendar;
}

function isToday(day: Day | null): boolean {
	if (!day) return false;
	const today = new Date();
	const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
		2,
		'0',
	)}-${String(today.getDate()).padStart(2, '0')}`;
	return day.yyyyMmDd === todayStr;
}

const weekdayHeaders = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function Calendar() {
	const year = new Date().getFullYear();
	const calendar = getCalendarYear(year);

	return (
		<div className="space-y-4">
			<h2 className="mt-4 text-center">{year}</h2>
			<div className="grid grid-cols-3 gap-2">
				{calendar.map((month) => (
					<div key={month.name} className="space-y-2 sm:space-y-4">
						<div className="font-bold text-center text-xs sm:text-base">{month.name}</div>
						<div className="grid grid-cols-8 gap-1 text-[0.450rem] min-[480px]:text-[0.7rem] sm:text-sm">
							<span className="flex items-center justify-center aspect-square text-gray-400">
								#
							</span>
							{weekdayHeaders.map((day) => (
								<span
									key={day}
									className="flex items-center justify-center aspect-square font-medium text-gray-400"
								>
									{day.slice(0, 1)}
								</span>
							))}
							{month.weeks.map((week) => (
								<React.Fragment key={week.weekNo}>
									<span className="flex items-center justify-center aspect-square text-gray-400">
										{week.weekNo}
									</span>
									{week.days.map((day, idx) => (
										<span
											key={idx}
											className={`flex items-center justify-center aspect-square ${
												isToday(day) ? 'font-bold bg-blue-500 rounded-sm' : null
											}`}
										>
											{day?.date}
										</span>
									))}
								</React.Fragment>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
