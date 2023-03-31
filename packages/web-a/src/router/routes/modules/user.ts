import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const USER: AppRouteRecordRaw = {
    path: '/user',
    name: 'user',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: 'menu.user',
        icon: 'icon-user',
        requiresAuth: true,
        order: 7,
    },
    children: [
        {
            path: 'info',
            name: 'Info',
            component: () => import('@/features/user/info/routes/index.vue'),
            meta: {
                locale: 'menu.user.info',
                requiresAuth: true,
                roles: ['*'],
            },
        },
        {
            path: 'setting',
            name: 'Setting',
            component: () => import('@/features/user/setting/routes/index.vue'),
            meta: {
                locale: 'menu.user.setting',
                requiresAuth: true,
                roles: ['*'],
            },
        },
    ],
};

export default USER;