import { useQuery, useMutation, UseQueryOptions, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { notificationService } from '../../api/notifications';
import type {
    NotificationListResponseDto,
    UnreadCountResponseDto,
    MarkAsReadResponseDto,
    MarkAllAsReadResponseDto,
    DeleteNotificationResponseDto,
    NotificationQueryParams,
} from '../../types/notifications';
import { TResponseError } from '../../types/common';

// Query for notifications
export const useNotifications = (
    params?: NotificationQueryParams,
    options?: Omit<UseQueryOptions<NotificationListResponseDto, TResponseError>, 'queryKey' | 'queryFn'>
) => {
    return useQuery({
        queryKey: ['notifications', params],
        queryFn: () => notificationService.getNotifications(params),
        ...options,
    });
};

// Query for unread count
export const useUnreadNotificationCount = (
    options?: Omit<UseQueryOptions<UnreadCountResponseDto, TResponseError>, 'queryKey' | 'queryFn'>
) => {
    return useQuery({
        queryKey: ['unread-notification-count'],
        queryFn: () => notificationService.getUnreadCount(),
        refetchInterval: 30000, // Refetch every 30 seconds
        ...options,
    });
};

// Mutation for marking as read
export const useMarkNotificationAsRead = (): UseMutationResult<
    MarkAsReadResponseDto,
    TResponseError,
    string,
    unknown
> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['mark-notification-read'],
        mutationFn: (notificationId) => notificationService.markAsRead(notificationId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notifications'] });
            queryClient.invalidateQueries({ queryKey: ['unread-notification-count'] });
        },
    });
};

// Mutation for marking all as read
export const useMarkAllNotificationsAsRead = (): UseMutationResult<
    MarkAllAsReadResponseDto,
    TResponseError,
    void,
    unknown
> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['mark-all-notifications-read'],
        mutationFn: () => notificationService.markAllAsRead(),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notifications'] });
            queryClient.invalidateQueries({ queryKey: ['unread-notification-count'] });
        },
    });
};

// Mutation for deleting notification
export const useDeleteNotification = (): UseMutationResult<
    DeleteNotificationResponseDto,
    TResponseError,
    string,
    unknown
> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['delete-notification'],
        mutationFn: (notificationId) => notificationService.deleteNotification(notificationId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notifications'] });
            queryClient.invalidateQueries({ queryKey: ['unread-notification-count'] });
        },
    });
};
