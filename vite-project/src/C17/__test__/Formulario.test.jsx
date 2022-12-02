import { describe, expect, test } from "vitest";
import {render, screen} from "@testing-library/react";

describe("tests de componente Formulario", () => {
    test("input no debería recibir valores numericos",() => {
        
        render(<input></input>);
        const input = screen.findAllByDisplayValue('input', {value: 12})

        expect(input).not.toBeTypeOf(Number);
    })
    // test("button debería disparar evento", () => {

    // })
})