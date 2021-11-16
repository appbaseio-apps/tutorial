import { css } from '@emotion/css';

const seachAppStyles = css`
    display: flex;
    padding: 10px;
    border-bottom: 1px solid rgb(239, 239, 239);

    .img-container {
        height: 160px;
        width: 160px;
        object-fit: contain;
    }

    .description-container {
        margin: 8px 0px;
        color: #888;
        font-size: 13px;
        line-height: 18px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const tagContainer = css`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin-bottom: 10px;
	.tag {
		justify-content: end;
		margin-right: 10px;
		& * {
			margin: 0 !important;
			padding: 0 !important;
			max-width: 200px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			list-style: none !important;
			display: inline !important;
			line-height: inherit !important;
			font-size: 14px !important;
		}
	}
`;

export { seachAppStyles, tagContainer };
