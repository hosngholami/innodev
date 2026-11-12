<!-- <template>

    <li class="slide has-sub open" v-for="menu in menu">
        <a href="javascript:void(0);" class="side-menu__item">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none" viewbox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z">
                </path>
            </svg>
            <span class="side-menu__label">{{ menu.title}}</span>
            <i class="ri-arrow-down-s-line side-menu__angle"></i>
        </a>
        <ul class="slide-menu child1">
            <li class="slide has-sub">
                <a href="javascript:void(0);" class="side-menu__item">فروشگاه<i class="ri-arrow-down-s-line side-menu__angle"></i></a>
                <ul class="slide-menu child2">
                    <li class="slide">
                        <a href="add-products.html" class="side-menu__item">افزودن محصول</a>
                    </li>
                    <li class="slide">
                        <a href="cart.html" class="side-menu__item">سبد خرید</a>
                    </li>
                    <li class="slide">
                        <a href="checkout.html" class="side-menu__item">تسویه حساب</a>
                    </li>
                    <li class="slide">
                        <a href="edit-products.html" class="side-menu__item">ویرایش محصولات</a>
                    </li>
                    <li class="slide">
                        <a href="order-details.html" class="side-menu__item">جزئیات سفارش</a>
                    </li>
                    <li class="slide">
                        <a href="orders.html" class="side-menu__item">سفارشات</a>
                    </li>
                    <li class="slide">
                        <a href="products.html" class="side-menu__item">محصولات</a>
                    </li>
                    <li class="slide">
                        <a href="product-details.html" class="side-menu__item">جزئیات محصولات</a>
                    </li>
                    <li class="slide">
                        <a href="products-list.html" class="side-menu__item">لیست محصولات</a>
                    </li>
                    <li class="slide">
                        <a href="wishlist.html" class="side-menu__item">لیست علاقه‌مندی‌ها</a>
                    </li>
                </ul>
            </li>
            <li class="slide">
                <a href="full-calendar.html" class="side-menu__item">تقویم کامل</a>
            </li>
            <li class="slide">
                <a href="gallery.html" class="side-menu__item">گالری</a>
            </li>
            <li class="slide">
                <a href="sweet-alerts.html" class="side-menu__item">هشدارها</a>
            </li>
        </ul>
    </li>
</template>
<script setup>

defineProps({
  menu: {
    type: Object,
    required: true 
  }
})

</script> -->

<template>
    <li v-for="item in menu" :key="item.id || item.title" class="slide"
        :class="{ 'has-sub': item.children?.length, 'close': item.children?.length }">
        <a :href="item.children?.length ? 'javascript:void(0);' : (item.href || '#')" class="side-menu__item">
           
            <svg v-if="!item.isChild" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 side-menu__icon" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>

            <span class="side-menu__label">{{ item.title }}</span>

            <i v-if="item.children?.length" class="ri-arrow-down-s-line side-menu__angle"></i>
        </a>

        <!-- بخش بازگشتی -->
        <ul v-if="item.children?.length" class="slide-menu" :class="level === 1 ? 'child1' : 'child2'">
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
