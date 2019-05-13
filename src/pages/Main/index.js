import React, { Component } from 'react';

import * as Styles from './styles';

export default class Main extends Component {
  state = {
    list: [],
    input: '',
    editId: null,
    editValue: '',
  };

  generateId = () => {
    const { list } = this.state;
    const id = Math.round(Math.random() * 100);
    if (list.length > 0) {
      list.forEach(element => {
        if (element.id === id) {
          id = this.generateId();
        }
      });
    } else {
      return id;
    }
    return id;
  }

  handleChange(event) {
    this.setState({ input: event.target.value })
  };

  handleEdit(event) {
    this.setState({ editValue: event.target.value })
  };

  updateItem = id => {
    const { list, editValue } = this.state;
    list.forEach(element => {
      if (element.id === id) {
        element.data = editValue;
      }
      this.setState({
        editId: null,
        editValue: '',
      });
    })
  }
  deleteItem = id => {
    const { list } = this.state;
    this.setState({
      list: list.filter(item => item.id !== id)
    });
  };

  addToDo = () => {
    const { input, list } = this.state;
    const newId = this.generateId();
    console.log(newId)
    this.setState({
      list: [...list, {
        id: newId,
        data: input,
      }],
      input: '',
    })
  }

  render() {
    const { input, list, editId, editValue } = this.state;
    return (
      <Styles.Container>
        <Styles.Box>
          <Styles.TextInput
            type={'text'}
            value={input}
            onChange={this.handleChange.bind(this)}
            placeholder={'Insira um item para a lista'}
          />
        </Styles.Box>
        <Styles.Button onClick={this.addToDo}>
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
                      type={'text'}
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
                    <Styles.ItemButton onClick={() =>
                      this.updateItem(item.id)}>
                      SAVE
                  </Styles.ItemButton> :
                    <Styles.ItemButton onClick={() =>
                      this.setState({
                        editId: item.id,
                        editValue: item.data
                      })}>
                      EDIT
                  </Styles.ItemButton>}
                  <Styles.ItemButton onClick={() =>
                    this.deleteItem(item.id)}>
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
