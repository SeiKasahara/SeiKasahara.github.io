import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

export default function rehypeFigure() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'img') return;

      const src = node.properties?.src;
      const alt = node.properties?.alt;
      if (!src) return;

      // 创建 <markdown-image> 组件节点
      const markdownImageNode = h('markdown-image', { src, alt: alt || '' });

      // 替换
      if (parent && typeof index === 'number') {
        parent.children[index] = markdownImageNode;
      }
    });
  };
}