'use client';

import { useMemo, useState } from 'react';
import { stateInfoData, type StateInfo } from '@/lib/taxData/stateTax';

const stateOrder = Object.keys(stateInfoData);

export default function StateTaxMap() {
  const [selected, setSelected] = useState<StateInfo>(stateInfoData.CA);

  const cells = useMemo(() => {
    return stateOrder.map((abbr, index) => {
      const state = stateInfoData[abbr];
      const col = index % 10;
      const row = Math.floor(index / 10);
      return {
        ...state,
        x: 16 + col * 110,
        y: 16 + row * 80,
      };
    });
  }, []);

  return (
    <div className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 p-6 shadow-sm">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <div className="rounded-2xl bg-accent/10 text-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
              Interactive Map
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Click any state abbreviation to view current income tax details.
            </p>
          </div>

          <svg viewBox="0 0 1160 520" className="w-full h-[360px] rounded-3xl bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-700">
            {cells.map((state) => (
              <g key={state.abbreviation} onClick={() => setSelected(state)} style={{ cursor: 'pointer' }}>
                <rect
                  x={state.x}
                  y={state.y}
                  width="100"
                  height="60"
                  rx="16"
                  fill={state.hasStateTax ? '#eff6ff' : '#dcfce7'}
                  stroke={selected.abbreviation === state.abbreviation ? '#2563eb' : '#cbd5e1'}
                  strokeWidth={selected.abbreviation === state.abbreviation ? 3 : 1}
                />
                <text x={state.x + 50} y={state.y + 25} textAnchor="middle" fontSize="16" fontWeight="700" fill="#1f2937">
                  {state.abbreviation}
                </text>
                <text x={state.x + 50} y={state.y + 45} textAnchor="middle" fontSize="11" fill="#374151">
                  {state.hasStateTax ? `${(state.taxRate * 100).toFixed(1)}%` : 'No tax'}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-700 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-2">Selected State</p>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-200 text-xl font-bold">
                {selected.abbreviation}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{selected.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{selected.notes ?? 'State income tax rate summary.'}</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white dark:bg-slate-950 border border-gray-200 dark:border-gray-700 p-5 space-y-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">State Income Tax Rate</p>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                {selected.hasStateTax ? `${(selected.taxRate * 100).toFixed(1)}%` : 'No state income tax'}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Tax Status</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {selected.hasStateTax
                  ? 'This state levies an income tax based on earned income.'
                  : 'This state does not have a general income tax.'}
              </p>
            </div>
            <div className="rounded-2xl bg-blue-50 dark:bg-blue-950 p-4">
              <p className="text-sm text-gray-700 dark:text-blue-100">Tip</p>
              <p className="mt-2 text-sm text-gray-900 dark:text-white">
                Use the state tax calculator to compare how your net pay changes when you move between states.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
