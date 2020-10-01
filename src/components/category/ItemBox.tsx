import React, { useState } from 'react';
import { ICategory } from '../../models/category.interface';
import ItemBody from './ItemBody';

const ItemBox = ({ data }: { data: ICategory }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="col-sm-6 mt-4">
      <div className="accordion">
        <div className="card">
          <div className="card-header">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left"
                type="button"
                onClick={() => setOpen(!open)}
              >
                {data.category_name}
                {open ? '\u2193' : '\u2191'}
              </button>
            </h2>
          </div>

          <div className={open ? 'collapse show' : 'collapse'}>
            <div className="card-body">
              <ItemBody products={data.products} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBox;
