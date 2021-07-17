const Categories = () => {
    return (
        <section className='categories'>
            <h4>Included in all plans</h4>
            <div className='text-xl'>All The TV You Love</div>
            <div className='sub-text'>Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.</div>
            <div className='covers'>
                <div className='cover-1'>
                    <div className='cover-grad'></div>
                    <div className='cover-text'>
                        <div className='sub-title'>Past & Current Seasons</div>
                        <h3>TV Shows</h3>
                    </div>
                </div>
                <div className='cover-2'>
                    <div className='cover-grad'></div>
                    <div className='cover-text'>
                        <div className='sub-title'>New & Classic</div>
                        <h3>Movies</h3>
                    </div>
                </div>
                <div className='cover-3'>
                    <div className='cover-grad'></div>
                    <div className='cover-text'>
                        <div className='sub-title'>Groundbreaking</div>
                        <h3>Hulu Originals</h3>
                    </div>
                </div>
                <div className='cover-4'>
                    <div className='cover-grad'></div>
                    <div className='cover-text'>
                        <div className='sub-title'>Add-on</div>
                        <h3>Premiums</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories
