'use strict';

/**
 * @ngdoc service
 * @name project1App.faq
 * @description
 * # faq
 * Service in the project1App.
 */
angular.module('project1App')
    .service('Faq', function() {
        // AngularJS will instantiate a singleton by calling "new" on this function
        return {
            faqList: [{
            	id: '0',
                title: 'Sample FAQ1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper elementum massa. Aliquam cursus laoreet dolor, ac ullamcorper diam ullamcorper vestibulum. Etiam risus massa, dapibus a commodo pharetra, imperdiet sit amet metus. Sed finibus, dolor id consectetur porttitor, ante augue pharetra risus, vitae sodales ante enim at lacus. Maecenas pharetra tempus neque, non porta magna tincidunt eget.'
            },
            {
            	id: '1',
                title: 'Sample FAQ2',
                description: 'Aenean tortor urna, volutpat sed rutrum et, aliquet quis ipsum. Nulla sed consectetur nibh. Morbi sit amet ligula iaculis, ultrices turpis id, tempor leo. Sed arcu velit, vehicula at sagittis ac, convallis sit amet felis. Suspendisse efficitur lectus lacus. In porttitor eros metus, ut pellentesque lectus maximus non. Donec non magna nisi. Fusce pretium eleifend purus, id blandit mauris accumsan nec. Duis aliquet eros vel quam auctor vehicula nec pretium turpis.'
            },
            {
            	id: '2',
                title: 'Sample FAQ3',
                description: 'Sed tincidunt mattis sapien, vitae sollicitudin tortor finibus et. Aliquam pharetra lacus vitae luctus porta. Donec turpis odio, molestie eu iaculis sed, venenatis et neque. Duis maximus dapibus ultrices. Donec mollis purus nec libero dignissim, at cursus nisi efficitur. Morbi bibendum mattis arcu, sit amet placerat augue hendrerit ac. Praesent sit amet leo dolor. Suspendisse tempus condimentum euismod. Aenean fringilla aliquam tincidunt. Integer eu pretium arcu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec fermentum, turpis at fermentum ultrices, arcu neque gravida ligula, in fermentum ex est sit amet lacus. Donec id neque dui. Nullam eu dui non lectus sollicitudin accumsan.'
            },
            {
            	id: '3',
                title: 'Sample FAQ4',
                description: 'Quisque at lobortis erat. Aenean porttitor diam et gravida viverra. Nulla maximus orci sed est lobortis, vitae dictum ligula blandit. Ut ultricies porttitor luctus. Suspendisse eleifend et enim a fermentum. Sed mollis, lacus at hendrerit scelerisque, justo felis aliquam leo, vel semper risus odio vel diam. Phasellus ac sem mi. Morbi in hendrerit lectus. Pellentesque in congue felis. Morbi ac dui nec lacus scelerisque imperdiet ut ac eros. Sed et magna risus. Fusce et enim a nisi semper placerat at eget ante. Fusce eu efficitur diam. Nulla dapibus lectus lorem, ut ultrices ex aliquam in. Quisque laoreet tincidunt erat.'
            },
            {
            	id: '4',
                title: 'Sample FAQ5',
                description: 'Quisque elementum est ac tellus dapibus porttitor. Maecenas lacinia nulla nec lacus iaculis, eget molestie neque porta. Duis malesuada volutpat metus ac rhoncus. Phasellus eget tristique justo. Nullam purus nisi, pellentesque quis leo vel, rhoncus congue metus. Praesent non odio interdum, vulputate justo luctus, maximus risus. Quisque euismod malesuada lorem, at dictum ante fermentum sed. Curabitur in placerat orci, id rhoncus turpis.'
            },
            {
            	id: '5',
                title: 'Sample FAQ6',
                description: 'Aenean eu ex non lectus tincidunt semper nec vitae sem. Phasellus tempor ante rhoncus erat sagittis eleifend. In ac venenatis risus. Aliquam id blandit orci, vitae scelerisque libero. Morbi porttitor in lacus id sodales. Morbi sagittis eros a faucibus accumsan. Aenean at sollicitudin purus. Morbi iaculis porttitor rhoncus. Nunc auctor aliquam lorem.'
            }]
        };

    });
