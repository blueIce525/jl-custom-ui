<template>
  <el-link
    :underline="false"
    type="primary"
    @click="clickHandle"
    size="mini"
    :icon="linkIcon || undefined"
    :class="['text-link', size]"
  >
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <span v-else>
      {{ linkText }}
    </span>
  </el-link
  >
</template>

<script>
export default {
  name: 'venus-text-link',
  props: {
    href: {
      // 文档链接 有该字段则优先打开该链接
      type: String,
      default: '',
    },
    link: {
      // 等同于href，优先级低于href
      type: String,
      default: '',
    },
    linkText: {
      // 链接文字
      type: String,
      default: '点击跳转',
    },
    linkIcon: {
      // 链接图标
      type: String,
      default: 'venus-icon icon-doc-link',
    },
    size: {
      // 文本字体大小 large/default/small
      type: String,
      default: 'default',
    },
  },
  computed: {
    openLink() {
      return this.href || this.link;
    },
  },
  methods: {
    clickHandle() {
      if (this.openLink) {
        window.open(this.openLink);
      } else {
        this.$emit('clickHandle');
      }
    },
  },
};
</script>

<style scoped="scoped" lang="scss">
.text-link {
  vertical-align: baseline;
  color: #0a6ff8;
  cursor: pointer;
  font-weight: 400;

  &:hover {
    color: #4292FF;

    & ::v-deep .el-link--inner {
      text-decoration-line: underline;
    }
  }

  &:active {
    color: #005BD6;

    & ::v-deep .el-link--inner {
      text-decoration-line: underline;
    }
  }

  & ::v-deep .el-link--inner {
    margin-left: 2px;
  }

  &.large {
    font-size: 16px;
  }

  &.default {
    font-size: 14px;
  }

  &.small {
    font-size: 12px;
  }
}
</style>
