<template>
    <li v-for="item in menu" :key="item.id || item.title" class="slide"
        :class="{ 'has-sub': item.children?.length, 'close': item.children?.length }">

        <a :href="item.children?.length ? 'javascript:void(0);' : (  item.full_url || '#')" class="side-menu__item">
            <span class="side-menu__label">{{ item.title }}</span>
            <i v-if="item.children?.length" class="ri-arrow-down-s-line side-menu__angle"></i>
        </a>
        <ul v-if="item.children?.length" class="slide-menu"   :class="level === 1 ? 'child1' : 'child2'">
            <Menu :menu="item.children" :level="level + 1" />
        </ul>
    </li>
</template>

<script setup>
defineProps({
    menu: {
        type: Array,
        required: true,
    },
    level: {
        type: Number,
        default: 1,
    },
});
</script>
