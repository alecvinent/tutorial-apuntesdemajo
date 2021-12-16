import PropsTypes from "prop-types";

export const NotePropTypes = PropsTypes.shape({
    id: PropsTypes.number,
    title: PropsTypes.string,
    level: PropsTypes.string,
    description: PropsTypes.string,
});