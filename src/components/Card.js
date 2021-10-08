import React, { Component } from "react";

export default class Card extends Component {
    render() {
        return (
        <div style={{minWidth: '350px'}} class="bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg mr-4">
           <div id="header" class="flex"> 
           <img alt="gambar" class="w-40 rounded-md border-2 border-gray-300" src={this.props.image} />
           <div id="body" class="flex flex-col ml-5">
              <h4 id="nama" class="text-xl font-semibold mb-2">{this.props.name}</h4>
              <p id="nim" class="text-gray-800 mt-2">{this.props.nim}</p>
              <p id="nip" class="text-gray-800 mt-2">{this.props.nip}</p>
              <div class="flex mt-5">
               </div>
            </div>
            </div>
         </div>
        );
    }
}
