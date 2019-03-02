export interface TreeNode {
  id: number | string;
  label: string;
  children: TreeNode[];
  isExpanded?: boolean;
}
