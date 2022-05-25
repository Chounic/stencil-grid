import { Component, Prop, h, State, Watch } from '@stencil/core';
import { CharacterProps } from './Character.props';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {


  @Prop() column: string;

  @Prop() data!: string;

  @State() dataArray: Array<CharacterProps>;

  componentWillLoad() {
    this.parseDataProp(this.data);
  }

  @Watch('column')
  validateColumn(newValue: string) {
    if (['primary', 'secondary'].includes(newValue)) {
      this.column = newValue;
    }
  }

  @Watch('data')
  parseDataProp(newValue: string | CharacterProps[]) {
    if (newValue) {
      if (typeof newValue === "string") {
        this.dataArray = JSON.parse(newValue);
      } else {
        this.dataArray = newValue;
      }
    }

  }


  render() {

    return (
      <div class='container'>
        <table>
          <thead >
            <tr>
              {Object.keys(this.dataArray[0]).map(item => {
                if (item !== 'url' && item !== 'created') return <th class={`header-cell ${this.column ? 'column-' + this.column : null}`}>{item}</th>
              }
              )
              }
            </tr>
          </thead>
          <tbody>
            {this.dataArray.map(char => (
              <tr>
                {Object.keys(this.dataArray[0]).map(val => {
                  if (val === 'url' || val === 'created') {

                  } else if (val === 'origin' || val === 'location') {
                    return <td class='body-cell' >{char[val].name}</td>
                  } else if (val === 'episode') {
                    return <td class='body-cell'>{char[val].length}</td>
                  } else if (val === 'image') {
                    return <td class='body-cell'><img src={char[val]} alt="character image" /></td>
                  } else return (
                    <td class='body-cell'>{char[val]}</td>
                  )
                }
                )
                }
              </tr>
            ))
            }

          </tbody>
        </table>


      </div>

    )
  }
}
