/* 589. N-ary Tree Preorder Traversal

Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal.
Each group of children is separated by the null value (See examples)



Example 1:
Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]

Example 2:
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]

Constraints:
The number of nodes in the tree is in the range [0, 104].
0 <= Node.val <= 104
The height of the n-ary tree is less than or equal to 1000.


Follow up: Recursive solution is trivial, could you do it iteratively?
*/

/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     int numChildren;
 *     struct Node** children;
 * };
 */

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

// Solution 1 - Recursive
void search(struct Node* root, int* arr, int* idx) {
    if (!root) return;
    printf("index: %d\n", (*idx));
    arr[(*idx)++] = root->val;
    for (int i = 0; i < root->numChildren; i++) {
        search(root->children[i], arr, idx);
    }
}

int* preorder(struct Node* root, int* returnSize) {
    // printf("root->val: %d, root->numChildren: %d\n", root->val, root->numChildren);
    // printf("root->children[0]->numChildren: %d\n", root->children[2]);
    // printf("%d\n", *returnSize);
    // printf("index: %d\n", &index);

    int* answer = (int*) malloc(10000 * sizeof(int));
    int index = 0;
    search(root, answer, &index);
    *returnSize = index;

    return answer;
}
// End Solution 1

// Solution 2 - Recursive
/**
int* preorder(struct Node* root, int* returnSize) {
    if (root == NULL) {
        int* my_preorder = malloc(10 * sizeof(int));
        *returnSize = 0;
        return my_preorder;
    }

    printf("###%d\n", root->val);
    *returnSize = 1;
    int numChildren = root->numChildren;
    int* children_preorder[numChildren + 10];
    int children_sizes[numChildren + 10];

    for (int i = 0; i < numChildren; i++) {
        int child_return_size = 0;
        int * child_preorder = preorder(root->children[i], &child_return_size);

        children_preorder[i] = child_preorder;
        children_sizes[i] = child_return_size;

        *returnSize += child_return_size;
    }
    printf("###%d had size %d\n", root->val, *returnSize);
    int* my_preorder = malloc((*returnSize + 10) * sizeof(int));
    my_preorder[0] = root->val;

    int current_num_elements = 1;
    for (int i = 0; i < numChildren; i++) {
        printf("###%d had children: ", root->val);
        for (int j = 0; j < children_sizes[i]; j++) {
            printf("%d ", children_preorder[i][j]);

            my_preorder[current_num_elements + j] = children_preorder[i][j];
        }
        free(children_preorder[i]);
        current_num_elements += children_sizes[i];
        printf("\n");
    }

    return my_preorder;
}
*/
// End Solution 2

/**
arr[(*idx)++] = root->val; === arr[(*idx)] = root->val;
                               *idx++;

arr[++(*idx)] = root->val; === *idx++;
                               arr[(*idx)] = root->val;
*/
