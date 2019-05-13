import React, { Component } from 'react';
import { Creators as TodoActions } from '../../store/ducks/todo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Styles from './styles';

class Main extends Component {
  state = {
    input: '',
    editValue: '',
    editId: null,
  };

  handleChange(event) {
    const { value } = event.target;
    this.setState({ input: value });
  };

  handleEdit(event) {
    const { value } = event.target;
    this.setState({ editValue: value });
  };

  render() {
    const { addTodo, removeItem, updateItem } = this.props;
    const { list } = this.props.todo;
    const { input, editId, editValue } = this.state;
    return (
      <Styles.Container>
        <Styles.Box>
          <Styles.TextInput
            type="text"
            value={input}
            onChange={this.handleChange.bind(this)}
            placeholder={'Insira um item para a lista'}
          />
        </Styles.Box>
        <Styles.Button onClick={() => {
          this.setState({
            input: '',
          })
          addTodo(input)
        }}>
          ADICIONAR
        </Styles.Button>
        <Styles.Box>
          <Styles.ListBox>
            {list.map(item =>
              <Styles.ItemContainer key={item.id}>
                <Styles.CheckboxContainer>
                  <Styles.Checkbox type="checkbox" />
                  {editId === item.id ?
                    <Styles.TextInput
                      type="text"
                      value={editValue}
                      onChange={this.handleEdit.bind(this)}
                      placeholder={'Edite o item'}
                    /> :
                    <p>
                      {item.data}
                    </p>}

                </Styles.CheckboxContainer>
                <Styles.Buttons>
                  {editId === item.id ?
                    <Styles.ItemButton onClick={() => {
                      updateItem(item.id, editValue)
                      this.setState({
                        editValue: '',
                        editId: '',
                      })
                    }}>
                      SAVE
                  </Styles.ItemButton> :
                    <Styles.ItemButton onClick={() =>
                      this.setState({
                        editId: item.id,
                        editValue: item.data,
                      })}>
                      EDIT
                  </Styles.ItemButton>}
                  <Styles.ItemButton onClick={() =>
                    removeItem(item.id)}>
                    REMOVE
                  </Styles.ItemButton>
                </Styles.Buttons>
              </Styles.ItemContainer>
            )}
          </Styles.ListBox>
        </Styles.Box>
      </Styles.Container>
    );
  }
}
const mapStateToProps = state => ({
  todo: state.todo,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main)