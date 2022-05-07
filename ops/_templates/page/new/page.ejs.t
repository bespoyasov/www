---
to: ./src/pages/<%= h.changeCase.camel(name) %>.tsx
---
import type { <%= name %>Props } from '@views/<%= name %>';
import { <%= name %> as <%= name %>Page } from '@views/<%= name %>';

export default <%= name %>Page;
