import { z } from "zod";

export type NavOpen = "" | "open" | "close";
export type Unpacked<T> = T extends (infer U)[] ? U : T;
export type CartItem = Unpacked<z.infer<typeof CartItemSchema>>;
export const CartItemSchema = z.array(
    z.object({
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        photo: z.string(),
    })
);

const LOCALSTORAGE_KEY = "ADJSEOIGJL84K84S3N1MDF";
export const getLocalStorageItem = () =>
    CartItemSchema.safeParse(
        JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) ?? "{}")
    );
