import styled from '@emotion/styled';

const FieldFormStyles = styled.form`
    width: 88%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ul {
        margin: 8px 0 0 0;
        padding: 0;
        list-style-type: none;
        padding: 4px 8px;
    }
    .canNotBeBlank {
        margin: 8px 0;
        color: red;
        font-size: 12px;
    }
`;

export default FieldFormStyles;
