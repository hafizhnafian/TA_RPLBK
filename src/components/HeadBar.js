import React, { Component } from "react";

export default class HeadBar extends Component {
    render() {
        return (
        <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-blue-900 shadow sm:items-baseline w-full">
          <div class="mb-2 sm:mb-0">
            <a href="/" class="text-3xl no-underline text-white hover:text-blue-dark">{this.props.home}</a>
          </div>
          <div>
            <a href="/mhs" class="text-xl no-underline text-white hover:text-blue-dark ml-2">{this.props.mhs}</a>
            <a href="/dsn" class="text-xl no-underline text-white hover:text-blue-dark ml-2">{this.props.dsn}</a>
          </div>
        </nav>
        );
    }
}