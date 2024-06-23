/**
 * Express router paths go here.
 */


export default {
  Base: '/api',
  books: {
    Base: '/books',
    Get: '/all',
    Add: '/add',
    Update: '/update/:id',
    Delete: '/delete/:id',
  },
} as const;
