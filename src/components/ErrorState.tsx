interface ErrorStateProps {
  onRetry: () => void;
}

function ErrorState({ onRetry }: ErrorStateProps) {
  return (
    <section className='flex flex-col gap-8 px-28 pt-16'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-xl font-semibold text-neutral-900'>Unexpected error</h1>
        <span className='text-sm text-neutral-500'>
          We're facing some issues at the moment. Please try again later or contact support.
        </span>
      </div>
      <button
        type='button'
        onClick={onRetry}
        className='w-fit rounded bg-indigo-700 px-5 py-3 text-base font-medium text-white hover:bg-indigo-800'
      >
        Try again
      </button>
    </section>
  );
}

export default ErrorState;
