import { Component, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { TreeNode } from './TreeNode';

/**
 * class TreealizeComponent
 *
 * Tree component for displaying folders, employees, categories or other tree-like data.
 * Provide a template, receive selected item events. Enough for basic display functionality.
 */
@Component({
  selector: 'ngx-treealize',
  templateUrl: './ngx-treealize.component.html',
  styleUrls: ['./treealize.component.less']
})
export class NgxTreealizeComponent {
  @Input() nodes: TreeNode[];
  @Input() selectedNode: number;
  @Input() treeTemplate: ElementRef;
  @Output() selected = new EventEmitter<number | string>();

  public selectNode(nodeId: number | string): void {
      this.selected.emit(nodeId);
  }

  public tryToggleNodeState(node: TreeNode): void {
      if (node && node.children && node.children.length) {
          node.isExpanded = !node.isExpanded;
      }
  }

}
