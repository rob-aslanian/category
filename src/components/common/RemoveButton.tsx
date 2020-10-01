import React from 'react';
import { connect } from 'react-redux';
import { removeFromCard } from '../../store/actions/category.actions';

const RemoveButton = ({
  id,
  removeFromCard,
}: {
  id: number;
  removeFromCard: any;
}) => {
  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={() => removeFromCard(id)}
    >
      Удалить
    </button>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  removeFromCard: (payload: number) =>
    dispatch(removeFromCard(payload)),
});

export default connect(null, mapDispatchToProps)(RemoveButton);
