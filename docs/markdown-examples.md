
```
                                                    * ——————————————— *
                                                    |                 |
                                               | -> |  Documentation  |
* ————————— *             * ———————— * OpenAPI |    |                 |
|           |   drizzle-  |          | ——————— |    * ——————————————— *
|  Drizzle  | —————————-> |  Elysia  |
|           |  -typebox   |          | ——————— |    * ——————————————— *
* ————————— *             * ———————— *   Eden  |    |                 |
                                               | -> |  Frontend Code  |
												    |                 |
												    * ——————————————— *

```


```ts twoslash
console.log('hello')
```

```ts twoslash 
import { relations } from 'drizzle-orm'
```


::: code-group

```ts twoslash [src/database/schema.ts]
import { relations } from 'drizzle-orm'
import {
    pgTable,
    varchar,
    timestamp
} from 'drizzle-orm/pg-core'

import { createId } from '@paralleldrive/cuid2'

export const user = pgTable(
    'user',
    {
        id: varchar('id')
            .$defaultFn(() => createId())
            .primaryKey(),
        username: varchar('username').notNull().unique(),
        password: varchar('password').notNull(),
        email: varchar('email').notNull().unique(),
        salt: varchar('salt', { length: 64 }).notNull(),
        createdAt: timestamp('created_at').defaultNow().notNull(),
    }
)

export const Table = {
	user
} as const

// export type Table = typeof table
```

:::

## drizzle-typebox
We may convert the `user` table into TypeBox models by using `drizzle-typebox`:


:::

## Hi