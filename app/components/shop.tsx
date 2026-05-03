'use client'

import {LuListFilter, LuX} from "react-icons/lu";
import LatestProducts from "./latestProducts";
import ProductCard from "./productCard";
import styles from "./shop.module.css";
import { useState } from "react";

const filters = {
  sort: {
    name: "Sort",
    options: [
      {
        label: "A - Z",
        value: "aToZ",
        type: "radio",
      },
      {
        label: "Price: Low to High",
        value: "priceLowToHigh",
        type: "radio",
      },
      {
        label: "Price: High to Low",
        value: "priceHighToLow",
        type: "radio",
      },
      {
        label: "ABV: High to Low",
        value: "abvHighToLow",
        type: "radio",
      },
      {
        label: "ABV: Low to High",
        value: "abvLowToHigh",
        type: "radio",
      },
    ],
  },

  category: {
    name: "Category",
    options: [
      { label: "All", value: "all", type: "checkbox" },
      { label: "Sparkling Wine", value: "sparkling", type: "checkbox" },
      { label: "Red Wine", value: "red", type: "checkbox" },
      { label: "White Wine", value: "white", type: "checkbox" },
      { label: "Non-Alcoholic", value: "nonAlcoholic", type: "checkbox" },
    ],
  },

  brands: {
    name: "Brands",
    options: [
      { label: "Four Cousins", value: "fourCousins", type: "checkbox" },
      { label: "Moet", value: "moet", type: "checkbox" },
      { label: "Veleta", value: "veleta", type: "checkbox" },
      { label: "Agor", value: "agor", type: "checkbox" },
      { label: "4th Street", value: "fourthStreet", type: "checkbox" },
    ],
  },

  price: {
    name: "Price",
    min: 10000,
    max: 100000,
    type: "range",
  },
};



export default function Shop (){

    const  [ isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
        
        <div className={styles.container}>
            <h3>Wines & Vintages <span onClick={()=>{setIsSidebarOpen(true)}}><LuListFilter /></span></h3>
            <p className = {styles.subtitle}>A collection of highly rated and naturally sourced wine and vintage drinks available in Nigeria</p>
            <div className = {styles.mainContent}>
                <div className= {styles.left}>
                    <div>
                        <h4>Filters</h4>
                        <hr/>
                    </div>
                    {
                        Object.entries(filters).map(([filterName, filter]) => (
                            <div className={styles.filterGroup} key={filterName}>
                                <h5 className={styles.filterTitle}>{filter.name}</h5>
                                {'options' in filter && filter.options.map((option) => (
                                   <> 
                                    <div className={styles.filterItem} key={option.value}>
                                        <input
                                            type={option.type}
                                            id={`${filterName}-${option.value}`}
                                            name={filterName}
                                            value={option.value}
                                        />
                                        <label htmlFor={`${filterName}-${option.value}`}>
                                            {option.label}
                                        </label>
                                    </div>
                                     
                                    </>
                                ))}
                                <hr/>
                            </div>
                        ))
                    }
                </div>
                
                <div className={styles.productContainer}>
                    {Array.from({ length: 10 }, (_, i) => (
                                        <ProductCard key={i} />
                                    ))}
                </div>
            </div>
        </div>
        {isSidebarOpen && <div className = {styles.sidebar}>
            <div className={styles.sidebarContent}>
                    <div>
                        <h4>Filters <span onClick={()=>{setIsSidebarOpen(false)}}><LuX /> </span></h4>
                        <hr/>
                    </div>
                    {
                        Object.entries(filters).map(([filterName, filter]) => (
                            <div className={styles.filterGroup} key={filterName}>
                                <h5 className={styles.filterTitle}>{filter.name}</h5>
                                {'options' in filter && filter.options.map((option) => (
                                   <> 
                                    <div className={styles.filterItem} key={option.value}>
                                        <input
                                            type={option.type}
                                            id={`${filterName}-${option.value}`}
                                            name={filterName}
                                            value={option.value}
                                        />
                                        <label htmlFor={`${filterName}-${option.value}`}>
                                            {option.label}
                                        </label>
                                    </div>
                                     
                                    </>
                                ))}
                                <hr/>
                            </div>
                        ))
                    }
            </div>
        </div>}
        <LatestProducts />
        
        </>
    )
}