import { useNotifications } from "../hooks/useNotifications";
import ErrorState from "./ErrorState";
import SkeletonPannel from "./SkeletonPannel";
import NotificationForm from "./NotificationForm";

const NotificationPreferencesPanel = () => {
  const { data, loading, error, savePreferences, saving, refetch } = useNotifications();

  if (loading) return <SkeletonPannel />;
  if (error || !data) return <ErrorState onRetry={refetch} />;

  return (
    <NotificationForm
      initialData={data.preferences}
      savePreferences={savePreferences}
      saving={saving}
    />
  );
};

export default NotificationPreferencesPanel;
