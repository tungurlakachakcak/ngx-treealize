import { Component, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import { TreeNode } from '../TreeNode';

@Component({
    selector: 'tree-template',
    templateUrl: './tree-template.component.html',
    styleUrls: ['./tree-template.component.less']
})
export class TreeTemplateComponent {
    @Output() select = new EventEmitter<number | string>();
    @Output() toggleNode = new EventEmitter<TreeNode>();
    @Input() node: TreeNode;
    @Input() idx: number;
    @Input() nodes: TreeNode[] = [];
    @Input() selectedNode: string | number;
    @Input() treeTemplate: ElementRef;

    public selectNode(e: MouseEvent, nodeId: number | string): void {
        e.stopPropagation();
        this.select.emit(nodeId);
    }

    public tryToggleNodeState(e: MouseEvent, node: TreeNode): void {
        e.stopPropagation();
        this.toggleNode.emit(node);
    }
}
