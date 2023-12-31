/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IngredientCard {
        "imageSrc": string;
        "name": string;
        "targetUrl": string;
    }
    interface IngredientGrid {
        "ingredients": string;
    }
    interface RecipeCard {
        "imageSrc": string;
        "name": string;
        "targetUrl": string;
    }
    interface RecipeDetail {
        "recipe": string;
    }
    interface RecipeGrid {
        "recipes": string;
    }
}
declare global {
    interface HTMLIngredientCardElement extends Components.IngredientCard, HTMLStencilElement {
    }
    var HTMLIngredientCardElement: {
        prototype: HTMLIngredientCardElement;
        new (): HTMLIngredientCardElement;
    };
    interface HTMLIngredientGridElement extends Components.IngredientGrid, HTMLStencilElement {
    }
    var HTMLIngredientGridElement: {
        prototype: HTMLIngredientGridElement;
        new (): HTMLIngredientGridElement;
    };
    interface HTMLRecipeCardElement extends Components.RecipeCard, HTMLStencilElement {
    }
    var HTMLRecipeCardElement: {
        prototype: HTMLRecipeCardElement;
        new (): HTMLRecipeCardElement;
    };
    interface HTMLRecipeDetailElement extends Components.RecipeDetail, HTMLStencilElement {
    }
    var HTMLRecipeDetailElement: {
        prototype: HTMLRecipeDetailElement;
        new (): HTMLRecipeDetailElement;
    };
    interface HTMLRecipeGridElement extends Components.RecipeGrid, HTMLStencilElement {
    }
    var HTMLRecipeGridElement: {
        prototype: HTMLRecipeGridElement;
        new (): HTMLRecipeGridElement;
    };
    interface HTMLElementTagNameMap {
        "ingredient-card": HTMLIngredientCardElement;
        "ingredient-grid": HTMLIngredientGridElement;
        "recipe-card": HTMLRecipeCardElement;
        "recipe-detail": HTMLRecipeDetailElement;
        "recipe-grid": HTMLRecipeGridElement;
    }
}
declare namespace LocalJSX {
    interface IngredientCard {
        "imageSrc"?: string;
        "name"?: string;
        "targetUrl"?: string;
    }
    interface IngredientGrid {
        "ingredients"?: string;
    }
    interface RecipeCard {
        "imageSrc"?: string;
        "name"?: string;
        "targetUrl"?: string;
    }
    interface RecipeDetail {
        "recipe"?: string;
    }
    interface RecipeGrid {
        "recipes"?: string;
    }
    interface IntrinsicElements {
        "ingredient-card": IngredientCard;
        "ingredient-grid": IngredientGrid;
        "recipe-card": RecipeCard;
        "recipe-detail": RecipeDetail;
        "recipe-grid": RecipeGrid;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ingredient-card": LocalJSX.IngredientCard & JSXBase.HTMLAttributes<HTMLIngredientCardElement>;
            "ingredient-grid": LocalJSX.IngredientGrid & JSXBase.HTMLAttributes<HTMLIngredientGridElement>;
            "recipe-card": LocalJSX.RecipeCard & JSXBase.HTMLAttributes<HTMLRecipeCardElement>;
            "recipe-detail": LocalJSX.RecipeDetail & JSXBase.HTMLAttributes<HTMLRecipeDetailElement>;
            "recipe-grid": LocalJSX.RecipeGrid & JSXBase.HTMLAttributes<HTMLRecipeGridElement>;
        }
    }
}
