import { HomeIcon, ViewListIcon } from "@heroicons/vue/outline/index.js";

export const useAdminNavigation = () => {
    const route = useRoute();
    const router = useRouter();

    const navigation = [
        {
            name: "Tableau de board", to: {
                name: 'adminer',
            }, icon: HomeIcon, current: true
        },
        {
            name: "Artices", to: {
                name: 'adminer-articles',
            }, icon: ViewListIcon, current: false
        },
    ];

    for (let i = 0; i < navigation.length; i++) {
        navigation[i].current = navigation[i].to.name === route.name;
    }

    watch(router.currentRoute, (to) => {
        navigation.forEach((item) => {
            item.current = item.to.name === to.path;
        });
    });

    return {
        navigation,
    }
};