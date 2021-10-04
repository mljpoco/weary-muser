function ArchiveComponent() {
    return (
        <div className="botnav col text-right archive order-last">
            <a data-toggle="collapse" href=".arch-collapse" role="button" aria-expanded="false"
                aria-controls="arch-collapse">
                Archive
            </a>
            <div class="collapse arch-collapse">
                <a data-toggle="collapse" href=".tt-one-collapse" role="button" aria-expanded="false"
                    aria-controls="tt-one-collapse">
                    2021
                </a>
                <div class="collapse tt-one-collapse">
                    <a data-toggle="collapse" href=".tt-one-oct" role="button" aria-expanded="false"
                        aria-controls="tt-one-oct">
                        October
                    </a>
                    <div class="collapse tt-one-oct">
                        <ul>
                            <li><a href="#">Decisions, Decisions</a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- <div class="collapse tt-one-collapse">
                        <a data-toggle="collapse" href=".tt-one-nov" role="button" aria-expanded="false" aria-controls="tt-one-nov">
                            November
                        </a>
                        <div class="collapse tt-one-nov">
                            <ul>
                                <li><a href="#">First November Article</a></li>
                                <li><a href="#">Second November Article</a></li>
                            </ul>
                        </div>
                    </div> --> */}
            </div>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <ArchiveComponent />
    </React.StrictMode>,
    document.querySelector('#ArchiveContainer')
);