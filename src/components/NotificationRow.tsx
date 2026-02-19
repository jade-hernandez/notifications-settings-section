import type { NotificationPreferences } from "../types/types";
import ToggleButton from "./ToggleButton";
import { formatNotificationType } from "../utils/formatLabels";

const NotificationRow = ({
  notificationType,
  state,
  onChange
}: {
  notificationType: string;
  state: NotificationPreferences;
  onChange: (channel: string, value: boolean) => void;
}) => {
  return (
    <div className='float-left flex items-end'>
      <div className='min-w-42 pt-4 text-sm text-neutral-900 md:min-w-76.5'>
        {formatNotificationType(notificationType)}
      </div>
      {Object.keys(state).map(channel => (
        <div
          key={channel}
          className='flex size-full last:pl-6 nth-[3]:pl-6 md:last:pl-20 md:nth-[3]:pl-20'
        >
          <ToggleButton
            checked={state[channel as keyof NotificationPreferences]}
            onChange={checked => onChange(channel, checked)}
            label={`${formatNotificationType(notificationType)} ${channel} notification`}
          />
        </div>
      ))}
    </div>
  );
};

export default NotificationRow;
