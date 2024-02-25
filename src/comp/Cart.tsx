import React, {useState} from 'react';
import { FC } from 'react';

interface Props {
  title: string;
}

export const Cart: React.FC<Props> = ({title}) => {  

  return (
    <cart>
      <section class="my-cart">
        <h2>{title}</h2>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Item</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="../img/image02.jpg" width="175" height="105"
                  loading="lazy" alt="Red grapes" />
              </td>
              <td data-name="Item">Red Grapes, 1lb</td>
              <td data-name="Unit Price">$ 3.23</td>
              <td data-name="Quantity">
                <input name="grapes" type="number"
                   aria-label="Pounds of grape baskets"
                   min="0" max="99"
                   value="1"/>
 
              </td>
              <td data-name="Total">
                15
              </td>
              <td>
                <button type="button" class="destructive">
                  <img width="24" height="24" 
                   src="./img/icons/star.svg" alt="star"/>
                </button>
              </td>
            </tr>

          <tfoot>
            <tr>
              <th colspan="4" scope="row">Total:</th>
              <td id="total">
                23
              </td>
            </tr>
          </tfoot>
          </tbody>
        </table>
      </section>
 
      <section class="summary">
        <h2>Summary</h2>
        <dl>
          <dt>Number of Items</dt>
          <dd id="itemQty">
            35
          </dd>
 
        </dl>
        <div class="actions">
          <a href="#" class="button primary">
            Proceed to Checkout
          </a>
          <a href="#" class="button secondary">
            Continue Shopping
          </a>
        </div>
      </section>
    </cart>

  )
};