import styled from "@emotion/styled";

const WriteInstructionStyles = styled.li`
    list-style-type: none;
    padding: 4px 8px;

    .container {
        display: grid;
        grid-template-columns: 33% 34% 33%;    
    }
    
    .giftImage {
        border-box: box-size;
        align-content: center;
        border: gray solid 1px;
        border-radius: 8px;
        margin: 8px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 8px rgba(0, 0, 0, 0.24);
        border-sizing: border-box;
        
        img {
            max-height: 180px;
        }
        
        p {
            max-height: 180px;
            text-align: center;
            margin: 0;
            padding: 0;
        }
    }
`;

export default WriteInstructionStyles;
