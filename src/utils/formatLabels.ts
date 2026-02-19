export const formatChannelLabel = (channel: string): string => {
  if (channel === "sms") return "SMS";
  return channel.charAt(0).toUpperCase() + channel.slice(1);
};

export const formatNotificationType = (type: string): string => {
  return type
    .split("_")
    .map((word, index) => (index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(" ");
};
