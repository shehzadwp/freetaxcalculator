export default function CalculatorSkeleton() {
  return (
    <div className="animate-pulse space-y-6 p-6 bg-gray-50 dark:bg-slate-800 rounded-xl" aria-hidden="true">
      <div className="h-8 bg-gray-200 dark:bg-slate-700 rounded w-1/3" />
      <div className="h-12 bg-gray-200 dark:bg-slate-700 rounded" />
      <div className="h-12 bg-gray-200 dark:bg-slate-700 rounded" />
      <div className="h-12 bg-gray-200 dark:bg-slate-700 rounded w-1/2" />
      <div className="h-32 bg-gray-200 dark:bg-slate-700 rounded" />
    </div>
  );
}
