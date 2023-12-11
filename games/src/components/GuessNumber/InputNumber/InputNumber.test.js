import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { InputNumber } from "./InputNumber";
import { prettyDOM } from "@testing-library/react";
import { TestEnvironment } from "jest-environment-jsdom";

test('render content', () => {
    const number = 1234;

    const component = render(<InputNumber number={number}></InputNumber>)

    component.getByText('1234');
})