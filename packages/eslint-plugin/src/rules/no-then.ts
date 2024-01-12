import { ESLintUtils, AST_NODE_TYPES } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator((name) => name);

export default createRule({
  name: 'no-then',
  meta: {
    docs: {
      description: 'enforcing using async/await syntax over Promises',
    },
    messages: {
      avoidThen: 'async/await syntax should be preferred over Promise.then',
    },
    type: 'suggestion',
    schema: [],
  },
  defaultOptions: [],

  create: (context) => {
    return {
      CallExpression(node) {
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
