import PropTypes from "prop-types";
const SortSelect = ({ sortType, onSortChange }) => {
    return (
        <div className="w-full flex items-center gap-2">
            <p className="w-fit sm:ml-auto text-zinc-500 font-brandon-800 text-2xl">
                Ordenar por:
            </p>
            <select
                value={sortType}
                onChange={(e) => onSortChange(e.target.value)}
                className="w-fit h-10 text-2xl px-2 font-brandon-500 border border-fofalText rounded focus:ring-fofalText focus:ring-1"
            >
                <option value="relevant">Destaques</option>
                <option value="low-high">Menor preço</option>
                <option value="high-low">Maior preço</option>
            </select>
        </div>
    );
};

SortSelect.propTypes = {
    sortType: PropTypes.string.isRequired,
    onSortChange: PropTypes.func.isRequired,
};

export default SortSelect;
