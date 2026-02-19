import { useState } from "react";
import type { NotificationPreferences } from "../types/types";
import { formatChannelLabel } from "../utils/formatLabels";
import NotificationRow from "./NotificationRow";
import Toast from "./Toast";

const NotificationForm = ({
  initialData,
  savePreferences,
  saving
}: {
  initialData: Record<string, NotificationPreferences>;
  savePreferences: (preferences: Record<string, NotificationPreferences>) => Promise<boolean>;
  saving: boolean;
}) => {
  const [formState, setFormState] = useState(initialData);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const channels = Object.keys(Object.values(initialData)[0]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await savePreferences(formState);

    if (success) {
      setToast({ message: "Changes saved successfully.", type: "success" });
    } else {
      setToast({
        message: "Unexpected error. Please try again later or contact support.",
        type: "error"
      });
    }
  };

  const updateFormState = (type: string, channel: string, value: boolean) => {
    setFormState(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [channel]: value
      }
    }));
  };

  return (
    <section className='flex flex-col gap-8 px-4 pt-16 md:px-8 lg:px-28'>
      {toast && (
        <div className='fixed top-6 right-6 z-50'>
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={() => setToast(null)}
          />
        </div>
      )}
      <div className='flex flex-col gap-2'>
        <h1 className='text-xl font-semibold text-neutral-900'>Manage Your Notifications</h1>
        <span className='text-sm text-neutral-500'>
          Choose how you want to be notified about the
          <br className='md:hidden' /> latest updates and messages.
        </span>
      </div>

      <form
        onSubmit={handleSubmit}
        className='w-full md:w-145.25 lg:w-148'
      >
        <div className='flex items-center justify-start gap-6 border-b border-neutral-200 pr-6 md:gap-20'>
          <div className='h-6 w-42 md:w-76.5' />
          {channels.map(channel => (
            <span
              key={channel}
              className='py-2 text-left text-sm font-semibold text-neutral-900'
            >
              {formatChannelLabel(channel)}
            </span>
          ))}
        </div>

        <div className='flex flex-col items-start justify-center'>
          {Object.entries(formState).map(([notificationType, preferences]) => (
            <NotificationRow
              key={notificationType}
              notificationType={notificationType}
              state={preferences}
              onChange={(channel, value) => updateFormState(notificationType, channel, value)}
            />
          ))}
        </div>

        <div className='flex justify-end pt-10 pb-4'>
          <button
            type='submit'
            disabled={saving}
            className='flex w-44 items-center justify-center gap-2 rounded bg-indigo-700 px-5 py-3 text-base font-medium text-white hover:bg-indigo-800 focus:bg-indigo-800 focus:shadow-[0_0px_0px_1px_rgba(68,76,231,0.1),0_0px_0px_4px_rgba(68,76,231,0.12)] focus:outline-none disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-400'
          >
            {saving && (
              <span className='inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent' />
            )}
            {saving ? "Saving..." : "Save changes"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default NotificationForm;
