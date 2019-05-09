import React, { Component } from 'react';

import {
  Container,
  Box,
  ListBox,
  TextInput,
  Button,
  ItemContainer,
  Buttons,
  ItemButton,
  CheckboxContainer,
  Checkbox,
} from './styles';

export default class Main extends Component {
  state = {
    list: [],
    input: '',
    counter: 1,
    edit: false,
    editId: null,
  };

  handleChange(event) {
    this.setState({ input: event.target.value })
  };

  updateItem = item => {
    this.setState({
      input: item.data,
      edit: true,
      editId: item.id,
    });
  };

  deleteItem = id => {
    console.log(id)
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    });
  };

  addToDo = () => {
    if (this.state.edit) {
      const filtredList = this.state.list.filter(item => item.id != this.state.editId);
      this.setState({
        list: [...filtredList, {
          id: this.state.editId,
          data: this.state.input,
          edit: false,
          editId: null,
          input: '',
        }],
      })

    } else {
      this.setState({
        list: [...this.state.list, {
          id: this.state.counter,
          data: this.state.input,
        }],
        input: '',
        counter: this.state.counter + 1,
      })
    };
  }

  render() {
    return (
      <Container>
        <Box>
          <TextInput
            type={'text'}
            value={this.state.input}
            onChange={this.handleChange.bind(this)}
            placeholder={'Insira um item para a lista'}
          />
        </Box>
        <Button onClick={this.addToDo}>
          ADICIONAR
        </Button>
        <Box>
          <ListBox>
            {this.state.list.map(item =>
              <ItemContainer key={item.id}>
                <CheckboxContainer>
                  <Checkbox type="checkbox" />
                  <p>
                    {item.data}
                  </p>
                </CheckboxContainer>
                <Buttons>
                  <ItemButton onClick={() => this.updateItem(item)}>EDIT</ItemButton>
                  <ItemButton onClick={() => this.deleteItem(item.id)}>
                    REMOVE
                  </ItemButton>
                </Buttons>
              </ItemContainer>
            )}
          </ListBox>
        </Box>
      </Container>
    );
  }
}
