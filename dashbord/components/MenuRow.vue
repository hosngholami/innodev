<template>
  <tr class="crm-contact contacts-list">
    <td class="contacts-checkbox">
      <input class="form-check-input" type="checkbox" />
    </td>
    <td>
      <span :style="{ paddingRight: level * 20 + 'px' }">
        <i v-if="item.children && item.children.length" 
           class="ri-arrow-right-s-line me-1"
           :class="{ 'rotated': expanded }"
           @click="expanded = !expanded"
           style="cursor:pointer"></i>
        {{ item.title }}
      </span>
    </td>
    <td>{{ item.label || '-' }}</td>
    <td><i :class="item.icon"></i></td>
    <td>{{ item.url }}</td>
    <td>
      <span class="badge" :class="item.status ? 'bg-success-transparent' : 'bg-danger-transparent'">
        {{ item.status ? 'فعال' : 'غیرفعال' }}
      </span>
    </td>
    <td>{{ item.priority }}</td>
    <td>
      <div class="btn-list">
        <button class="btn btn-sm btn-info-light btn-icon">
          <i class="ri-pencil-line"></i>
        </button>
        <button class="btn btn-sm btn-primary2-light btn-icon">
          <i class="ri-delete-bin-line"></i>
        </button>
      </div>
    </td>
  </tr>

  <!-- فرزندان -->
  <template v-if="expanded && item.children && item.children.length">
    <MenuRow
      v-for="child in item.children"
      :key="child.id"
      :item="child"
      :level="level + 1"
    />
  </template>
</template>

<script>
export default {
  name: 'MenuRow',
  props: {
    item: { type: Object, required: true },
    level: { type: Number, default: 0 }
  },
  data() {
    return {
      expanded: true   // پیش‌فرض باز باشد
    }
  }
}
</script>