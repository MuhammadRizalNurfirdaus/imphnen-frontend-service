import { api, ApiResponse } from '../index';
import type {
    NotificationDto,
    NotificationListResponseDto,
    UnreadCountResponseDto,
    MarkAsReadResponseDto,
    MarkAllAsReadResponseDto,
    DeleteNotificationResponseDto,
    NotificationQueryParams,
} from '../../types/notifications';

export interface NotificationService {
    getNotifications(params?: NotificationQueryParams): Promise<NotificationListResponseDto>;
    getUnreadCount(): Promise<UnreadCountResponseDto>;
    markAsRead(notificationId: string): Promise<MarkAsReadResponseDto>;
    markAllAsRead(): Promise<MarkAllAsReadResponseDto>;
    deleteNotification(notificationId: string): Promise<DeleteNotificationResponseDto>;
}

export const notificationService: NotificationService = {
    async getNotifications(params?: NotificationQueryParams) {
        const response = await api.get<ApiResponse<NotificationListResponseDto>>('/notifications', { params });
        return response.data.data;
    },

    async getUnreadCount() {
        const response = await api.get<ApiResponse<UnreadCountResponseDto>>('/notifications/unread/count');
        return response.data.data;
    },

    async markAsRead(notificationId: string) {
        const response = await api.put<ApiResponse<MarkAsReadResponseDto>>(`/notifications/${notificationId}/read`);
        return response.data.data;
    },

    async markAllAsRead() {
        const response = await api.put<ApiResponse<MarkAllAsReadResponseDto>>('/notifications/read-all');
        return response.data.data;
    },

    async deleteNotification(notificationId: string) {
        const response = await api.delete<ApiResponse<DeleteNotificationResponseDto>>(`/notifications/${notificationId}`);
        return response.data.data;
    },
};

export * from '../../types/notifications';
