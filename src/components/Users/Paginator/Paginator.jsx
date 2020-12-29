import React, {useState} from 'react'
import s from './Paginator.module.css'

const Paginator = ({pagesCount, pagePortion = 10, onPageClick, currentPage, ...props}) => {
let [pageSection, setPageSection] = useState(0)
let sectionsCount = Math.ceil(pagesCount / pagePortion)

const onLeftClick = (pageSection) => {
    let newPageSection = pageSection - 1
            newPageSection = newPageSection < 0 ?  0 : newPageSection
                setPageSection(newPageSection)
}
    const onRightClick = (pageSection) => {
        let newPageSection = pageSection + 1
                newPageSection = newPageSection === sectionsCount
                    ? sectionsCount - 1
                    : newPageSection
                        setPageSection(newPageSection)
    }
    let pages = []
        for(let i = (pageSection * pagePortion) + 1; i <= (pageSection * pagePortion) + pagePortion; i++) {
            pages.push(i)
            if ( i === pagesCount ) break
                }
    return (
                <div className={s.pageItems}>
                    <span onClick={() => onLeftClick(pageSection)} className={s.leftArrow}></span>
                    {
                        pages.map((p) => {
                            return <span key={ p } onClick={() => onPageClick(p)}
                                         className={ `${s.pageItem} ${(currentPage === p ? s.active : '')}` }>
                                    {p} </span>
                        })
                    }
                    <span onClick={ () => onRightClick(pageSection)} className={s.rightArrow}></span>
                </div>
    )
}
export default Paginator