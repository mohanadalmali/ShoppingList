export default function FilterButtons({
  filterbutton,
  setfilterbutton,
  onClearItems,
}) {
  return (
    <div className="filter-buttons border rounded p-3 mb-3 d-flex justify-content-between">
      <div>
        <button
          item-filter="all"
          className={`btn me-1 ${filterbutton == "all" ? "btn-primery" : "btn-secondary"}`}
          onClick={() => setfilterbutton("all")}
        >
          All
        </button>
        <button
          item-filter="incomplete"
          className={`btn me-1 ${filterbutton == "incomplete" ? "btn-primery" : "btn-secondary"}`}
          onClick={() => setfilterbutton("incomplete")}
        >
          Incomplete
        </button>
        <button
          item-filter="completed"
          className={`btn me-1 ${filterbutton == "completed" ? "btn-primery" : "btn-secondary"}`}
          onClick={() => setfilterbutton("completed")}
        >
          Completed
        </button>
      </div>
      <div>
        <button className="btn btn-danger clear" onClick={onClearItems}>
          Clear
        </button>
      </div>
    </div>
  );
}
