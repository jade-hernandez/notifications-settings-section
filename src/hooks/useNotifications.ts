import { useCallback, useEffect, useState } from "react";
import type { NotificationPreferences } from "../types/types";

const GET_NOTIFICATIONS =
  "https://www.greatfrontend.com/api/projects/challenges/account/notifications";

export interface INotificationsData {
  preferences: Record<string, NotificationPreferences>;
}

export interface IUseNotificationsReturn {
  data: INotificationsData | null;
  loading: boolean;
  saving: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
  savePreferences: (preferences: Record<string, NotificationPreferences>) => Promise<boolean>;
}

export const useNotifications = (): IUseNotificationsReturn => {
  const [data, setData] = useState<INotificationsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [saving, setSaving] = useState(false); // new state for tracking save operation

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const url = new URL(GET_NOTIFICATIONS);

      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`Error fetching notifications: ${response.statusText}`);
      }

      const result = await response.json();

      setData(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  const savePreferences = useCallback(
    async (preferences: Record<string, NotificationPreferences>): Promise<boolean> => {
      try {
        setSaving(true);

        const response = await fetch(GET_NOTIFICATIONS, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ preferences })
        });

        if (!response.ok) {
          throw new Error("Failed to save preferences");
        }

        const result = await response.json();
        setData(result); // update local data with the server response

        return true;
      } catch {
        return false;
      } finally {
        setSaving(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, saving, error, refetch: fetchData, savePreferences };
};
