const rows = ["Comments", "Features", "Friend requests", "Friend updates", "Marketing"];

function SkeletonPannel() {
  return (
    <section className='flex flex-col gap-8 px-4 pt-16 md:px-8 lg:px-28'>
      <div className='flex flex-col gap-2'>
        <div className='h-7 w-66 animate-pulse rounded bg-linear-to-r from-neutral-100 to-neutral-300/80' />
        <div className='h-5 w-126 animate-pulse rounded bg-linear-to-r from-neutral-100 to-neutral-300/80' />
      </div>

      <div className='w-full md:w-145.25 lg:w-148'>
        <div className='flex items-center justify-start gap-6 border-b border-neutral-200 pr-4 md:gap-18'>
          <div className='h-6 w-42 md:min-w-57.5' />
          <div className='my-2 h-5 w-12 animate-pulse rounded bg-linear-to-r from-neutral-100 to-neutral-300/80' />
          <div className='my-2 h-5 w-12 animate-pulse rounded bg-linear-to-r from-neutral-100 to-neutral-300/80' />
          <div className='my-2 h-5 w-12 animate-pulse rounded bg-linear-to-r from-neutral-100 to-neutral-300/80' />
        </div>

        <div className='flex flex-col items-start justify-center gap-4 pt-4.5'>
          {Object.entries(rows).map(([notificationType]) => (
            <div
              className='float-left flex items-end'
              key={`${notificationType}-skeleton-row`}
            >
              <div className='h-5 w-32 animate-pulse rounded bg-linear-to-r from-neutral-100 to-neutral-300/80 pt-4' />
              <div className='ml-8.5 h-5 w-9 animate-pulse rounded-full bg-linear-to-r from-neutral-100 to-neutral-300/80 md:ml-44' />
              <div className='ml-7 h-5 w-9 animate-pulse rounded-full bg-linear-to-r from-neutral-100 to-neutral-300/80 md:ml-20' />
              <div className='ml-7 h-5 w-9 animate-pulse rounded-full bg-linear-to-r from-neutral-100 to-neutral-300/80 md:ml-20' />
            </div>
          ))}
        </div>

        <div className='flex justify-end pt-10'>
          <div className='h-12 w-44 animate-pulse rounded bg-linear-to-r from-neutral-100 to-neutral-300/80' />
        </div>
      </div>
    </section>
  );
}
export default SkeletonPannel;
