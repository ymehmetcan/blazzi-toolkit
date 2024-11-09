import { AST_NODE_TYPES } from '@typescript-eslint/utils';

import { createRule } from '@/utils';

export default createRule({
  name: 'no-then',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'enforcing using async/await syntax over Promises',
    },
    messages: {
      avoidThen: 'async/await syntax should be preferred over Promise.then',
    },
    schema: [],
  },
  defaultOptions: [],

  create: (context) => {
    return {
      CallExpression(node): void {
        if (
          node.callee.type === AST_NODE_TYPES.MemberExpression &&
          node.callee.property.type === AST_NODE_TYPES.Identifier &&
          node.callee.property.name === 'then'
        ) {
          context.report({
            node,
            messageId: 'avoidThen',
          });
        }
      },
    };
  },
});
